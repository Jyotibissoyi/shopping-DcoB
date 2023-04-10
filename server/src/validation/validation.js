const mongoose =require("mongoose")
const {isValidObjectId} = require("mongoose")

//---------------------------validation for value and body----------------------//
const isValid=function(value){
    if( typeof value=='undefined' || value==null) return false
    if( typeof value=='string' && value.trim().length===0) return false
    return true
}

//--------------------Validation for name-------------------------------------//
const validName=function(name){
    const nameRegex=/^[A-Z a-z]+$/
    return nameRegex.test(name)
}

//----------------------Validation for email---------------------------------------//
const validEmail=function(email){
    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}

//---------------------------------Validation for password----------------------//

const isValidPassword=function(password){
     password = password.trim()
    const passRegex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    return passRegex.test(password)
}

//---------------Validation for phone--------------------------------------------------//

const validPhone=function(phone){
    const phoneRegex=/^[789]\d{9}$/
    return phoneRegex.test(phone)
}

//----------------------Validation for Image---------------------------------------------//

const validImage = (value) => { return (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/).test(value) }

//-------------------------Validation for pincode-----------------------------------------//

const isValidPincode=function(pincode){
    const pincoderegex= /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
    return pincoderegex.test(pincode)
}

//---------------------------validation for objectID----------------------------------//
const  isValidObjectIds =function(id){
    const check = isValidObjectId(id);
    return check
}
//----------------------------validation for street-----------------------------------------------//
const isValidStreet=function(value){
    value=value.trim()
    return /^\w+([\s]?\w+[.,$,#,@]?)*$/.test(value)
}
//--------------------------------validation for price----------------------------------------------//
function isValidPrice(value){
    return /^[1-9]{1}\d*((\.)\d+)?$/.test(value)
}

//--------------------------------------validation for sizes------------------------------------------//

const isValidAvailableSizes = function (availablesizes)  {
    for( i=0 ;i<availablesizes.length; i++){
      if(!["S", "XS","M","X", "L","XXL", "XL"].includes(availablesizes[i])) return false
    }
    return true
  };

//-------------------------------------------validatin for numbers---------------------------------------//
  const isValidNum =function(value){
    return /[0-9]/

  }
//--------------------------------------validation for status------------------------------------------//
const isValidStatus =function(value){
return  ["pending", "completed", "cancelled"].indexOf(value)!==-1

}  
//---------------------------------------validation for installments-------------------------------------//
const isValidInstallment = (value) => {
     return (/^[0-9]+$/).test(value) }

//--------------------------------------validation for title--------------------------------------------//
const isValidProdName = (value) => { return (/^[A-Za-z]+|[A-Za-z]+\[0-9]+$/).test(value) }
//------------------------------------------module export---------------------------------------------// 

module.exports={
    validName,isValid,validEmail,isValidPassword,
    validPhone,validImage,isValidPincode,isValidObjectIds, 
    isValidStreet,isValidPrice, isValidAvailableSizes,validName,
    isValidNum,isValidStatus,isValidInstallment,isValidProdName}
