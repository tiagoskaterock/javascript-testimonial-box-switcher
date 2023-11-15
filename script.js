const testimonialsContainer = document.querySelector(".testimonials-container")

const testimonial = document.querySelector(".testimonial")

const userImage = document.querySelector(".user-image")

const username = document.querySelector(".username")

const role = document.querySelector(".role")

const testimonials = [
	{
		name:"Libbey", 
		photo:"http://randomuser.me/api/portraits/women/1.jpg",
		position:"Marketing Assistant",
		text:"Integrated dynamic collaboration"
	},
	{
		name:"Virgie", 
		photo:"http://randomuser.me/api/portraits/women/2.jpg",
		position:"Quality Engineer",
		text:"De-engineered object-oriented extranet"
	},
	{
		name:"Meagan", 
		photo:"http://randomuser.me/api/portraits/women/3.jpg",
		position:"Geological Engineer",
		text:"Multi-lateral radical protocol"
	},
	{
		name:"Shaw", 
		photo:"http://randomuser.me/api/portraits/women/4.jpg",
		position:"Environmental Tech",
		text:"Enhanced background methodology"
	},
	{
		name:"Anjela", 
		photo:"http://randomuser.me/api/portraits/women/5.jpg",
		position:"Social Worker",
		text:"Innovative bi-directional time-frame"
	},
	{
		name:"Hesther", 
		photo:"http://randomuser.me/api/portraits/women/6.jpg",
		position:"Tax Accountant",
		text:"Proactive global orchestration"
	},
	{
		name:"Sullivan", 
		photo:"http://randomuser.me/api/portraits/women/7.jpg",
		position:"Librarian",
		text:"Reduced well-modulated definition"
	},
	{
		name:"Saw", 
		photo:"http://randomuser.me/api/portraits/women/8.jpg",
		position:"Nurse Practicioner",
		text:"Distributed full-range utilisation"
	},
	{
		name:"Talyah", 
		photo:"http://randomuser.me/api/portraits/women/9.jpg",
		position:"Compensation Analyst",
		text:"Robust methodical utilisation"
	},
	{
		name:"Louisette", 
		photo:"http://randomuser.me/api/portraits/women/10.jpg",
		position:"Account Coordinator",
		text:"Assimilated asymmetric system engine"
	}
]

let idx = 0

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx]
	testimonial.innerHTML = text
	username.innerHTML = name	
	role.innerHTML = position	
	userImage.src = photo

	idx++

	if (idx > testimonials.length -1) {
		idx = 0
	}

}

updateTestimonial()

setInterval(updateTestimonial, 2000);
