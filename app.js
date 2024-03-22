//EventListener
document.addEventListener('DOMContentLoaded', () => {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchBtn = document.getElementById('fetchPokemon');

    fetchBtn.addEventListener('click', () => {
        fetchThePoke(pokemonInput.value)
    })
})


//Function to fetch the pokemon
function fetchThePoke(valueOfInputField) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${valueOfInputField.toLowerCase()}`)
        .then(reponse => reponse.json())
        .then(data => displayPokemon(data))
        .catch(error => {
            console.error('Pokemon not found:', error)
            alert('Pokemon does not exist! You can try again.', error)
    })
}

//Function to display the pokemon
function displayPokemon(pokemon) {
    const display = document.getElementById('pokemon-display')
    display.innerHTML = `
        <div class = "text-center">
            <img src = ${pokemon.sprites.front_default}>
                <h3>${pokemon.name.toUpperCase()}</h3>
        </div>
    `,
        confetti({
            particleCount: 2000,
            spread: 200
        });
}






//Parameters are simply containers for the value that will come in the future when we use the function

function test(Eventtype, Participants, Guru, Price) {
    // Combining the Parameters with text to make sense
    console.log("The event is a:", Eventtype);
    console.log("There are", Participants, "People are invited to the party");
    console.log("We will have the honor of seeing", Guru, "the great!");
    console.log("The event will give us", Price, "with", Guru, "!");
}

// Populating the parameters
test("Coding lesson", 12, "Othman", "unbelievable hacker knowledge")



// **** EmailJs REQUEST ****

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (networkEvent) => {
    networkEvent.preventDefault();

    const serviceID = "service_7g8t0al"
    const templateID = "template_jiczfn5"
    const publicKEY = "D6ieAodtUr71o0zO6"
    
    emailjs.sendForm(serviceID, templateID, contactForm, publicKEY)
        .then(() => {
            Swal.fire({
                title: "Success!",
                text: "Your meesgae was succesfuly sent!",
                icon: "success"
            })

            contactForm.reset();
        })
        .catch(error => Swal.fire({
            title: "Error",
            text: "Your message was not sent...",
            icon: "error"
        }, console.log(error)
        ));
});