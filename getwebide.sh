# WebIDE get/install script
echo "Installing dependencies"
apt install git toilet
echo "Cloning Repository"
git clone https://github.com/josephworks/WebIDE.git

echo "Starting WebServer!"
toilet WebIDE

java -version
java -jar WebServerLite.jar
