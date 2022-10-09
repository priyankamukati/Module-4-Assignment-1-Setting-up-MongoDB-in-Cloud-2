import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  customerName: String, //Loanee's Name
  phoneNumber:  String, //Loanee's Phone Number
  address:      String, //Loanee's Phone Number
  loanAmount:  Number,  //Amount borrowed by the loanee
  interest:    Number,  //Interest Rate on borrowed amount  
  loanTermYears:   Number, //Duration of loan
  loanType:    String, //For which purpose(i.e for personal, for car,for home etc) amount borrowed by the loanee
  description: String, //details of loan type
  createdDate: { type: Date, default: Date.now }, //date on which loanee details got created
  insertedDate: { type: Date, default: Date.now } //to track insert and update on the loanee
});