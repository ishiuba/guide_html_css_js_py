# pyqt5 QLabels

import sys;
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel;
from PyQt5.QtGui import QFont
from PyQt5.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setGeometry(0, 0, 720, 480)

        label = QLabel('Hello', self)
        label.setFont(QFont('Arial', 40))
        label.setGeometry(0, 0, 720, 110)
        label.setStyleSheet('color: red;''background-color: #222;''font-weight: bold;''font-style: italic;''text-decoration: underline;')

        #label.setAlignment(Qt.AlignTop) # Vly top
        #label.setAlignment(Qt.AlignHCenter) # Hly center
        #label.setAlignment(Qt.AlignHCenter | Qt.AlignVCenter) # Vly & Hly centered
        label.setAlignment(Qt.AlignCenter) # Vly & Hly centered shortcut




def main():
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
