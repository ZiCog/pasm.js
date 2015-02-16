DAT

                org 0

init            neg phsa, #1
                mov ctra, m_ctraMode
                mov dira, m_txPin

                rdlong rxHead, m_rxHeadPtr
                mov rxPC, #rxBegin

                rdlong txTail, m_txTailPtr
                mov txPC, #txBegin

                mov syncCNT, m_baudRate
                add syncCNT, cnt

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

syn_c            waitcnt syncCNT, m_baudRate
                jmpret syncPC, rxPC
                waitcnt syncCNT, m_baudRate
                jmpret syncPC, rxPC
                waitcnt syncCNT, m_baudRate
                jmpret syncPC, rxPC
                waitcnt syncCNT, m_baudRate
                jmpret syncPC, txPC

                jmp #syn_c

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

                ' Start Bit
_
rxLoop          jmpret rxPC, syncPC
rxBegin         test m_rxPin, ina wc
if_c            jmp #rxLoop
                jmpret rxPC, syncPC

                ' Rx Byte
                mov rxTemp2, #8
rxLoop2         jmpret rxPC, syncPC
                jmpret rxPC, syncPC
                jmpret rxPC, syncPC
                test m_rxPin, ina wc
                rcr rxTemp, #1
                djnz rxTemp2, #rxLoop2
                shr rxTemp, #24

                ' Test Full
                rdlong rxTail, m_rxTailPtr
                neg rxTail, rxTail
                add rxTail, rxHead
                and rxTail, m_rxMask2

                ' 1/2 Stop Bit
                jmpret rxPC, syncPC

                ' Write Byte
                cmp rxTail, m_rxSize wz
if_nz           mov rxBuffer, rxHead
if_nz           and rxBuffer, m_rxMask
if_nz           add rxBuffer, m_rxBufferPtr
if_nz           wrbyte rxTemp, rxBuffer

                ' Inc Head
if_nz           add rxHead, #1
if_nz           and rxHead, m_rxMask2
if_nz           wrlong rxHead, m_rxHeadPtr

                ' 1/2 Stop Bit
                jmpret rxPC, syncPC

                jmp #rxLoop

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

                ' Test Empty
txLoop          jmpret txPC, syncPC
txBegin         rdlong txHead, m_txHeadPtr
                sub txHead, txTail
                and txHead, m_txMask2 wz
if_z            jmpret txPC, syncPC
                wrlong txHead, par
                tjz txHead, #txLoop

                ' Read Byte
                mov txBuffer, txTail
                and txBuffer, m_txMask
                add txBuffer, m_txBufferPtr

                ' Start Bit
                jmpret txPC, syncPC
                mov phsa, #$0
                rdbyte phsa, txBuffer

                ' Inc Tail
                add txTail, #1
                and txTail, m_txMask2
                wrlong txTail, m_txTailPtr

                ' Tx Byte
                mov txTemp2, #9
txLoop2         or phsa, #$100
                jmpret txPC, syncPC
                ror phsa, #1
                djnz txTemp2, #txLoop2

                jmp #txBegin

