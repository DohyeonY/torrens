from bluetooth import *
import webbrowser
import pyautogui
import time

url = 'https://www.naver.com'
chrome_path = '/usr/lib/chromium-browser/chromium-browser'

addr = "98:D3:51:F9:58:EF"
socket = BluetoothSocket(RFCOMM)
// socket.connect(("Arduino", 1))
socket.connect((addr, 1))
print("bluetooth connected!")

while True:
    data = socket.recv(1024)  // type == byte

    // ret = str(data)
    ret2 = bytes(1)

    print("Received : %s" %data)
    // print("data type : %s" %type(data))
    // print(ret)

    if (data != ret2):
        webbrowser.get(chrome_path).open(url)

    if (data == "q"):
        print("Quit")
        break
socket.close()
