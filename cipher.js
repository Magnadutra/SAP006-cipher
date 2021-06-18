const cipher = {

   encode: function (offset, string) { 
      let codificar = ""; 
      let chave_deslocamento = parseInt(offset); 
         if (string == "" || string == null || offset == "" || offset == null) {
          throw new TypeError("Argumentos inválidos");
         }
      for (let i = 0; i <= string.length; i++) { 
         let codigo_letra = string.charCodeAt(i); 
         if (codigo_letra >= 65 && codigo_letra <= 90) {
            let codificado = ((codigo_letra - 65 + chave_deslocamento) % 26) + 65; 
            codificar += String.fromCharCode(codificado); 
         }
         if (codigo_letra >= 97 && codigo_letra <= 122) {
            codificar += String.fromCharCode((codigo_letra - 97 + chave_deslocamento) % 26 + 97); 
         }
         if (string.charCodeAt(i) == 32){
            codificar += string.charAt(i); 
         }
         if (string.charCodeAt(i) == 44) {
            codificar += string.charAt(i); 
         }
      }
      return codificar
   },

   decode: function (offset, string) {
      let mensagemdecifra = "";
      let numoffset = parseInt(offset);
      if (string == "" || string == null || offset == "" || offset == null) {
         throw new TypeError("Argumentos inválidos");
      }

      for (let i = 0; i <= string.length; i++) {
         let descodificar_letra = string.charCodeAt(i);

         if (descodificar_letra >= 65 && descodificar_letra <= 90) {
            mensagemdecifra+= String.fromCharCode((descodificar_letra - 90 - numoffset) %26 + 90)
         }
         if (descodificar_letra >= 97 && descodificar_letra <= 122) {
            mensagemdecifra += String.fromCharCode((descodificar_letra - 97 + numoffset) % 26 + 97); 
         }
         if (string.charCodeAt(i) == 32){
            mensagemdecifra += string.charAt(i);
         }
         if (string.charCodeAt(i) == 44) {
            mensagemdecifra += string.charAt(i); 
         }
      }
      return mensagemdecifra
   }
};

export default cipher;

