


const machines = [
    {
        maskine: "Gravmaskine",
        billede: "https://st.depositphotos.com/2403851/3760/i/950/depositphotos_37604543-stock-photo-excavator.jpg"
    },
    {
        maskine: "Bulldozer",
        billede: "https://media.istockphoto.com/id/500217175/photo/excavator-working-with-earth-and-sand-in-sandpit-in-highway.jpg?s=612x612&w=0&k=20&c=tIrTAASJ0f_yC5XioQmwPC5ErGmvDmHspx3n8wVBepI="
    },
    {
        maskine: "Betonblander",
        billede: "https://st2.depositphotos.com/23494518/49059/i/1600/depositphotos_490596736-stock-photo-industrial-concrete-mixer-construction-site.jpg"
    },
    {
        maskine: "Kran",
        billede: "https://www.shutterstock.com/shutterstock/photos/746685397/display_1500/stock-photo-mobile-crane-on-a-road-and-tower-crane-in-construction-site-746685397.jpg"
    },
    {
        maskine: "Bulldozer",
        billede: "https://www.shutterstock.com/image-photo/warehouse-man-worker-forklift-driver-260nw-1563329365.jpg"
    }
];

const profile = {
    "name": sessionStorage.getItem('name'),
    "profilepicture": sessionStorage.getItem('picture')
  }

const generateMachineButton = document.querySelector("#machinebutton");
const resultField = document.querySelector("#resultField");

let randomNumber = Math.floor(Math.random() * machines.length);
    const selectedMachine = machines[randomNumber];
    resultField.innerHTML = `
        <p>Hvis ${profile.name} var en maskine vil de være en: ${selectedMachine.maskine}</p>
        <img src="${selectedMachine.billede}" alt="Profile Picture" style="width: 150px; height: 150px; border: 1px solid black;">
    `;
    resultField.style.display = "block";
