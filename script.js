function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if(isNaN(dob.getTime())){
        document.getAnimations('output').innerHTML = "Por favor coloque uma data valida";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiference = today.getMonth() - dob.getMonth;

    if (monthDiference < 0 || (monthDiference === 0  && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('output').innerHTML = "Você tem " + age + " anos de idade";
}