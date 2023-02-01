#include <SoftwareSerial.h>

int RX = 3;
int TX = 4;
int btn = 7;
int ledState = LOW;
int R_LED = 10;
SoftwareSerial bluetooth(RX, TX);

int last_btn_state;
int current_btn_state;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  bluetooth.begin(9600);
  pinMode(btn, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(R_LED, OUTPUT);

  current_btn_state = digitalRead(btn);
}

void loop() {
  // put your main code here, to run repeatedly:
  last_btn_state = current_btn_state;
    current_btn_state = digitalRead(btn);

  if(last_btn_state == HIGH && current_btn_state == LOW){
    Serial.println("The button is pressed");

    ledState = !ledState;

    // digitalWrite(LED_BUILTIN, ledState);
    digitalWrite(R_LED, ledState);
  }

  if(bluetooth.available()){
    Serial.write(bluetooth.read());
  }
  if(Serial.available()){
    bluetooth.write(Serial.read());
  }
}
