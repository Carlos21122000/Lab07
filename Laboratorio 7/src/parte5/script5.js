import '../CSS/csspaginas.scss';
import img6 from '../multimedia/img6.jpeg';
import vegas from '../Multimedia/vegas.mp3';
import img8 from '../multimedia/img8.jpeg';
import img10 from '../multimedia/img10.jpeg';

const header1 = document.createElement("header");
const nav1 = document.createElement("nav");
	const ul_general = document.createElement("ul");
		
		const li_inicio = document.createElement("li");
		const a_inicio = document.createElement("a");
		const span_inicio = document.createElement("span");
		a_inicio.href = "./principal.html";
		a_inicio.innerText= "Inicio"; 
		span_inicio.class = "primero";	
		a_inicio.appendChild(span_inicio);
		li_inicio.appendChild(a_inicio);
		ul_general.appendChild(li_inicio);
		nav1.appendChild(ul_general);
		header1.appendChild(nav1);
			
		const li_primeras = document.createElement("li");
		const a_primeras = document.createElement("a");
		const span_primeras = document.createElement("span");
		a_primeras.href = "";//no es necesario agregar pagina aqui
		a_primeras.innerText= "Primeras 3"; 
		span_primeras.class = "segundo";
		a_primeras.appendChild(span_primeras);
		li_primeras.appendChild(a_primeras);
		ul_general.appendChild(li_primeras);
		nav1.appendChild(ul_general);
		header1.appendChild(nav1);
			const ul_primeras = document.createElement("ul");
				const li_primeras1 = document.createElement("li");
				const a_primeras1 = document.createElement("a");
				a_primeras1.href = "./Parte1.html";
				a_primeras1.innerText= "Parte 1, llegada al aereopuerto"; 
				li_primeras1.appendChild(a_primeras1);
				ul_primeras.appendChild(li_primeras1);
				li_primeras.appendChild(ul_primeras);
				const li_primeras2 = document.createElement("li");
				const a_primeras2 = document.createElement("a");
				a_primeras2.href = "./Parte2.html";
				a_primeras2.innerText= "Parte 2, durante el vuelo y llegada"; 
				li_primeras2.appendChild(a_primeras2);
				ul_primeras.appendChild(li_primeras2);
				li_primeras.appendChild(ul_primeras);
				const li_primeras3 = document.createElement("li");
				const a_primeras3 = document.createElement("a");
				a_primeras3.href = "./Parte3.html";
				a_primeras3.innerText= "Parte 3, salida a San Francisco"; 
				li_primeras3.appendChild(a_primeras3);
				ul_primeras.appendChild(li_primeras3);
				li_primeras.appendChild(ul_primeras);
				
		const li_siguientes = document.createElement("li");
		const a_siguientes = document.createElement("a");
		const span_siguientes = document.createElement("span");
		a_siguientes.href = "";//no es necesario agregar pagina aqui
		a_siguientes.innerText= "Siguientes 3"; 
		span_siguientes.class = "tercero";
		a_siguientes.appendChild(span_siguientes);
		li_siguientes.appendChild(a_siguientes);
		ul_general.appendChild(li_siguientes);
		nav1.appendChild(ul_general);
		header1.appendChild(nav1);
			const ul_siguientes = document.createElement("ul");
				const li_siguientes1 = document.createElement("li");
				const a_siguientes1 = document.createElement("a");
				a_siguientes1.href = "./Parte4.html";
				a_siguientes1.innerText= "Parte 4, Estando en SF"; 
				li_siguientes1.appendChild(a_siguientes1);
				ul_siguientes.appendChild(li_siguientes1);
				li_siguientes.appendChild(ul_siguientes);
				const li_siguientes2 = document.createElement("li");
				const a_siguientes2 = document.createElement("a");
				a_siguientes2.href = "./Parte5.html";
				a_siguientes2.innerText= "Parte 5, Las vegas"; 
				li_siguientes2.appendChild(a_siguientes2);
				ul_siguientes.appendChild(li_siguientes2);
				li_siguientes.appendChild(ul_siguientes);
				const li_siguientes3 = document.createElement("li");
				const a_siguientes3 = document.createElement("a");
				a_siguientes3.href = "./Parte6.html";
				a_siguientes3.innerText= "Parte 6, Mi primer partido de Base"; 
				li_siguientes3.appendChild(a_siguientes3);
				ul_siguientes.appendChild(li_siguientes3);
				li_siguientes.appendChild(ul_siguientes);
				
		const li_ultimas = document.createElement("li");
		const a_ultimas = document.createElement("a");
		const span_ultimas = document.createElement("span");
		a_ultimas.href = "";//no es necesario agregar pagina aqui
		a_ultimas.innerText= "Ultimas 4"; 
		span_ultimas.class = "cuarto";
		a_ultimas.appendChild(span_ultimas);
		li_ultimas.appendChild(a_ultimas);
		ul_general.appendChild(li_ultimas);
		nav1.appendChild(ul_general);
		header1.appendChild(nav1);
			const ul_ultimas = document.createElement("ul");
				const li_ultimas1 = document.createElement("li");
				const a_ultimas1 = document.createElement("a");
				a_ultimas1.href = "./Parte7.html";
				a_ultimas1.innerText= "Parte 7, Ida a Six Flag"; 
				li_ultimas1.appendChild(a_ultimas1);
				ul_ultimas.appendChild(li_ultimas1);
				li_ultimas.appendChild(ul_ultimas);
				const li_ultimas2 = document.createElement("li");
				const a_ultimas2 = document.createElement("a");
				a_ultimas2.href = "./Parte8.html";
				a_ultimas2.innerText= "Parte 8, Ida a estudios Universales"; 
				li_ultimas2.appendChild(a_ultimas2);
				ul_ultimas.appendChild(li_ultimas2);
				li_ultimas.appendChild(ul_ultimas);
				const li_ultimas3 = document.createElement("li");
				const a_ultimas3 = document.createElement("a");
				a_ultimas3.href = "./Parte9.html";
				a_ultimas3.innerText= "Parte 9, Ida a Disney"; 
				li_ultimas3.appendChild(a_ultimas3);
				ul_ultimas.appendChild(li_ultimas3);
				li_ultimas.appendChild(ul_ultimas);
				const li_ultimas4 = document.createElement("li");
				const a_ultimas4 = document.createElement("a");
				a_ultimas4.href = "./Parte10.html";
				a_ultimas4.innerText= "Parte 10, Estadio LAFC"; 
				li_ultimas4.appendChild(a_ultimas4);
				ul_ultimas.appendChild(li_ultimas4);
				li_ultimas.appendChild(ul_ultimas);
				
		
		const li_personal = document.createElement("li");
		const a_personal = document.createElement("a");
		const span_personal = document.createElement("span");
		a_personal.href = "./personal.html";
		a_personal.innerText= "Quien Soy?"; 
		span_personal.class = "quinto";
		a_personal.appendChild(span_personal);
		li_personal.appendChild(a_personal);
		ul_general.appendChild(li_personal);
		nav1.appendChild(ul_general);
		header1.appendChild(nav1);
		

const h1 = document.createElement("h1");
const titulo = document.createTextNode("LAS VEGAS");
h1.appendChild(titulo);

const h4 = document.createElement("h4");
const texto1 = document.createTextNode("lo que pasa en las vegas se queda en las vegas (bueno aqui hare una excepcion)");
h4.appendChild(texto1);

const main_div = document.createElement("div");
	const figure1 = document.createElement("figure");
		const image1 = document.createElement("img");
		image1.src = img6 ;
		image1.atl = "SF";
		image1.style.width = "450px";
		image1.style.height = "350px";
		image1.style.display="block";
		image1.style.margin = "auto";
		figure1.appendChild(image1);
		
		const figcaption1 = document.createElement("figcaption");
		figcaption1.textContent = "Fig.5 - Las Vegas, Nevada, USA.";
		figcaption1.style.color = "white";
		figure1.appendChild(figcaption1);
	main_div.appendChild(figure1);

	const br0_texto = document.createElement("br");
	main_div.appendChild(br0_texto)

	const detail = document.createElement("details")
	const summary = document.createElement("summary")
	summary.innerText = "GOLD & SILVER PAWN SHOP"
	detail.appendChild(summary);
	main_div.appendChild(detail);

	const image2 = document.createElement("img");
	image2.src = img8;
	image2.width = "300";
	detail.appendChild(image2);
	
	const br4_texto = document.createElement("br");
	detail.appendChild(br4_texto)
	
	const parrafo = document.createElement("p");
	const contenido = document.createTextNode("Ibamos manejando por las vegas y de la nada veo la tienda de empe??o y tuve que decirle a todos que debiamos ir a conocer y valio la pena, la verdad tenia la esperanza de toparme con rick chum o el hijo de rick pero no estaban");
	detail.appendChild(contenido);
	

	const br_1texto= document.createElement("br");
	main_div.appendChild(br_1texto);

	const detail1 = document.createElement("details")
	const summary1 = document.createElement("summary")
	summary1.innerText = "CARTEL LAS VEGAS"
	detail1.appendChild(summary1);
	main_div.appendChild(detail1);

	const image3 = document.createElement("img");
	image3.src = img10;
	image3.width = "300";
	detail1.appendChild(image3);
	
	const br5_texto = document.createElement("br");
	detail1.appendChild(br5_texto)
	
	const parrafo1 = document.createElement("p");
	const contenido1 = document.createTextNode("Esta es una de las partes que mas me recuerdo de todo el viaje porque al momento de tomarnos las fotos en el cartel, habia un Elvis ofreciendo toamr fotos, el elvis falso le hablo a mi papa para ofrecerle tomar una foto y mi papa acepto que si despues el elvis le cobro 20 dolares por tomarle una foto jaja");
	detail1.appendChild(contenido1);
	

	const br2_texto = document.createElement("br");
	main_div.appendChild(br2_texto)

	const label1 = document.createElement("label1");
	label1.id = "link";
	label1.innerText = "link";

	const br3_texto = document.createElement("br");
	main_div.appendChild(br3_texto)

const audio = document.createElement("audio")
audio.controls = true;

const source = document.createElement("source");
source.src = vegas;
source.type = "audio/mp3";
audio.appendChild(source);
main_div.appendChild(audio);		
	
const Lista1 = document.createElement("ol");

const Li_1 = document.createElement("li");
const a_1 = document.createElement("a");
a_1.href = "https://gspawn.com/";
a_1.innerText = "Gold & Silver Pawn Shop";
Li_1.appendChild(a_1);
Lista1.appendChild(Li_1);

const Li_2 = document.createElement("li");
const a_2 = document.createElement("a");
a_2.href = "https://www.lasvegas.com/";
a_2.innerText = "las vegas"; 
Li_2.appendChild(a_2);
Lista1.appendChild(Li_2);

const Li_3 = document.createElement("li");
const a_3 = document.createElement("a");
a_3.href = "./principal.html";
a_3.innerText = "Regresar a Pagina Principal"; // regresar a pagina principal
Li_3.appendChild(a_3);
Lista1.appendChild(Li_3);

const label = document.createElement("label");
label.id = "pagina";
label.innerText = "Pagina 5  \t";

const progressbar = document.createElement("progress");
progressbar.id = "file";
progressbar.innerText = "45%";
progressbar.value = 45;
progressbar.max = 100;


// A??adir el nodo Element como hijo de la pagina
//document.body.appendChild(div);
document.body.appendChild(header1);
document.body.appendChild(h1);
document.body.appendChild(h4);
document.body.appendChild(main_div);
document.body.appendChild(label1);
document.body.appendChild(Lista1);
document.body.appendChild(label);
document.body.appendChild(progressbar);
