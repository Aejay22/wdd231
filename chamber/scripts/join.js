const form = document.querySelector("form");


    const info = new URLSearchParams(window.location.search);


    const firstName = info.get("firstName");

    const lastName = info.get("lastName");
    const email = info.get("emailAddress");
    const phone = info.get("phone number");
    const businessName = info.get("businessName");
    const membershipLevel = info.get("membership");

    const Thank = document.querySelector(".thankyou");
    if(Thank != null){
        Thank.innerHTML =`
        Thank you, ${firstName} ${lastName}, for submitting your membership application to our Chamber of Commerce. We appreciate your interest in joining our business community. We have successfully received your application with the following details: your email address is ${email}, your mobile phone number is ${phone}, your business/organization name is ${businessName}, and your selected membership level is the ${membershipLevel} Membership. Thank you for choosing us. We look forward to welcoming you as a valued member of our Chamber of Commerce!
        `;
    }
if (form != null){
    function Showed(dialog){
        dialog.showModal();
        dialog.querySelector(".closeModal").addEventListener("click", ()=>dialog.close());
    }

    

    const AnpModal = document.querySelector("a[href='#npModal']");
    const AbronzeModal = document.querySelector("a[href='#bronzeModal']");
    const AsilverModal = document.querySelector("a[href='#silverModal']");
    const AgoldModal = document.querySelector("a[href='#goldModal']");


    const npModal = document.querySelector("#npModal");
    const bronzeModal = document.querySelector("#bronzeModal");
    const silverModal = document.querySelector("#silverModal");
    const goldModal = document.querySelector("#goldModal");

    AnpModal.addEventListener("click", ()=>{
        Showed(npModal);
    });
    AbronzeModal.addEventListener("click", ()=>{
        Showed(bronzeModal);
    });
    AsilverModal.addEventListener("click", ()=>{
        Showed(silverModal);
    });
    AgoldModal.addEventListener("click", ()=>{
        Showed(goldModal);
    });

    const MyDialogs = document.querySelectorAll("dialog");
    MyDialogs.forEach(MyDialog => {
        MyDialog.addEventListener("click", (event)=>{
        if(event.target === MyDialog){
            MyDialog.close()
        }
    });
    });


}
