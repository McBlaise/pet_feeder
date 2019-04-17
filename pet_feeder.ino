#include <Servo.h>
Servo myservo;

int incomingByte = 0;
int led = 13;
void setup() {
  
  Serial.begin(1000);
  pinMode(13, OUTPUT);
  myservo.attach(9);
  
}

void loop() {

  if(Serial.available()){
    incomingByte = Serial.read();
    if(incomingByte == 70){

      myservo.write(0);              // tell servo to go to position in variable 'pos'
      delay(1500);
      myservo.write(180);              // tell servo to go to position in variable 'pos'
      delay(1500);
      myservo.write(0);              // tell servo to go to position in variable 'pos'
      delay(1500);
      
    }
    if(incomingByte == 87){

      digitalWrite(led, HIGH);
    
    }
  }
  delay(1000);
  digitalWrite(led, LOW);
}
