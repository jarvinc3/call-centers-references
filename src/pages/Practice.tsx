import { useEffect, useState } from "react";

const Practice = () => {
  //   const [select, setSelect] = useState(false);
  const [divRed, setDivRed] = useState(false);
  const [divGreen, setDivGreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivGreen(true);
    }, 5100);
    setTimeout(() => {
      setDivRed(true);
    }, 10500);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center pt-52 bg-white">
      {/* <ul
        className={`relative rounded-lg scrollbar-hide overflow-hidden flex flex-col gap-3 w-96 p-4 transition-all duration-1000 ease-in-out bg-slate-200 
        ${select ? "overflow-y-scroll max-h-96" : "max-h-12"}`}
      >
        <div
          onClick={() => setSelect(!select)}
          className="absolute top-0 w-full right-0 flex justify-between items-center p-3"
        >
          <li>Custom select</li>
          <li
            className={`cursor-pointer transition-all ease-in-out duration-500 ${
              select ? "-rotate-90" : "rotate-90"
            }`}
          >{`>`}</li>
        </div>
        <li className="mt-9 p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
        <li className="p-2 bg-slate-50 rounded-md">
          waos my nigga, luck at this{" "}
        </li>
      </ul> */}
      <div id="animation" className="animation relative">
        <p
          className={`text-3xl text-green-500 font-bold transition duration-500 ${
            divRed ? "opacity-1 opacity" : "opacity-0"
          }`}
        >
          Select your payment method
        </p>
        <div
          id={`${divGreen ? "green" : "opacity"}`}
          className="absolute w-40 h-40 top-1/2 left-[60%] rounded-full"
        >
          <img src="/Group_6.png" alt="" />
        </div>
        <div
          id="red"
          className="absolute w-40 h-40 top-40 left-[60%] rounded-full "
        >
          <img src="/Group_7.png" alt="" />
        </div>
      </div>
      {/* <div className="p-20">
        <div id="progress"></div>
        <h1>Marvel's Spider-Man 2 va a ser la bomba</h1>
        <h2>
          Vuelven los dos Spider-Man, Peter Parker y Miles Morales, para una
          nueva y emocionante aventura en la aclamada franquicia de Marvel's
          Spider-Man.
        </h2>
        <p>
          Balancéate, salta y usa las nuevas alarañas para recorrer la Nueva
          York de Marvel, cambia rápidamente entre Peter Parker y Miles Morales
          para experimentar historias diferentes y nuevos poderes épicos, y haz
          frente al icónico villano Venom que amenaza con destruir sus vidas, su
          ciudad y a sus seres queridos.
        </p>
        <p>
          Protagonizado por uno de los superhéroes más emblemáticos del mundo,
          Marvel's Spider-Man 2 presenta las habilidades acrobáticas, la
          improvisación y las telarañas que caracterizan al trepamuros,
          interpretado tanto por Peter Parker como Miles Morales, en su lucha
          contra el peligroso Venom y el resto de villanos del mundo Marvel.
        </p>
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" />
        <p>
          Insomniac Games publica una nueva ilustración del Venom de Marvel's
          Spider-Man 2 junto con detalles del antagonista. El juego llega el 20
          de octubre sólo para PS5.
        </p>
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-venom-4k-legal-13jul23?$1600px$" />
        <p>
          El lanzamiento de Marvel's Spider-Man 2 está previsto para dentro de
          tres meses, concretamente para el 20 de octubre sólo en PS5 (unos días
          antes comenzará su precarga). Antes, este verano, Insomniac Games se
          lo llevará a la San Diego Comic-Con 2023 para mostrarlo a los
          asistentes y compartir nuevos detalles del proyecto.
        </p>
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-story-duo-4k-legal-13jul23?$1600px$" />
        <p>
          Estamos seguros de que Venom será la gran estrella de Marvel's
          Spider-Man 2, una secuela protagonizada por Peter Parker y Miles
          Morales que promete subir la apuesta tanto a nivel narrativo como
          jugable con respecto a las dos anteriores entregas. Sin embargo,
          Insomniac Games ha destacado durante la celebración de la San Diego
          Comic-Con 2023 que no deberíamos desviar la atención de Kraven el
          Cazador, un antagonista que, en palabras de Jon Paquette, director
          narrativo del videojuego, funcionará como "el catalizador de la
          historia" y será el responsable de que se desencadenen los
          acontecimientos de esta nueva aventura.
        </p>
      </div> */}
    </div>
  );
};

export default Practice;
