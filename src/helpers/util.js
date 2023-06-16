function generateUID() {
    var uid = '';
    var characters = '0123456789';
    var length = characters.length;
  
    for (var i = 0; i < 6; i++) {
      uid += characters.charAt(Math.floor(Math.random() * length));
    }
  
    return uid;
}


const convertEfScore = (val) => {
  return `${parseInt(parseFloat(val).toFixed(2) * 100)}/100`;
}

const convertCarbon = (val) => {      
    return `${parseFloat(val).toFixed(2)} Kg /Per kg of product`;
}

export { generateUID, convertEfScore, convertCarbon }