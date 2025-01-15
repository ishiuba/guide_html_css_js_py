# pyqt5 intro

import sys
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtGui import QIcon

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("My cool first GUI")
        self.setGeometry(0, 0, 720, 480)
        self.setWindowIcon(QIcon('ishiubafavicon.png'))


# sys.argv
# The list of command line arguments passed to a Python script. `argv[0]` is the script name (it is operating
# system dependent whether this is a full pathname or not). If the command was executed using the `-c` com-
# mand line option to the interpreter, `argv[0]` is set to the string `'-c'`. If no script name was passed to the
# Python interpreter, `argv[0]` is the empty string.
def main():
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
