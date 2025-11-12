module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "" , email: "", password:"Mauvais mot de passe"}
    
    if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect (ou déjà pris)"

    if(err.message.includes("email"))
        errors.email = "Email incorrect"

    if(err.message.includes("password"))
        errors.email = "Mot de passe incorrect"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
        errors.pseudo = "Ce pseudo est déjà pris"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.pseudo = "Cet email est déjà pris"

    return errors
}   