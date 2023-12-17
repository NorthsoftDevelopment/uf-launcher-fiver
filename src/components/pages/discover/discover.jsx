import { CardDiscover } from "./CardDiscover";
import { SeparateShort } from "../../ExtraComponents/Separate/Separate";
import { CardDiscoverMin } from "./CardDiscoverMin";
import { CardDiscoverMods } from "./CardDiscoverMods";


export const DiscoverPage = () => {
  return (
    <div className="content">
      <h3 className="title-general-bold">INSTANCIAS MAS POPULARES</h3>
      <div className="discover-warp">
        <swiper-container
          centeredSlides="true"
          speed="500"
          loop="true"
          slides-per-view="3"
          space-between="5"
          width="1540"
        >
          <swiper-slide>
            <CardDiscover
              img="https://i.imgur.com/yIvQPjX.jpg"
              title="Hypixel"
              status="offline"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscover
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              status="online"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscover
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscover
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
        </swiper-container>
      </div>
      <SeparateShort/>
      <h3 className="title-general-bold">INSTANCIAS SERVIDORES</h3>
      <div className="discover-warp">
        <swiper-container
          centeredSlides="true"
          speed="500"
          loop="true"
          slides-per-view="5"
          space-between="10"
          width="1350"
        >
          <swiper-slide>
            <CardDiscoverMin
              title="Hypixel"
              status="offline"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              status="online"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>

          <swiper-slide>
            <CardDiscoverMin
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          
        </swiper-container>
      </div>
      <SeparateShort/>
      <h3 className="title-general-bold">INSTANCIAS MODS</h3>
      <div className="discover-warp">
        <swiper-container
          centeredSlides="true"
          speed="500"
          loop="true"
          slides-per-view="4"
          space-between="5"
          width="1400"
        >
          <swiper-slide>
            <CardDiscoverMods
              img="https://i.imgur.com/yIvQPjX.jpg"
              title="Hypixel"
              status="offline"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMods
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              status="online"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMods
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMods
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
          <swiper-slide>
            <CardDiscoverMods
              img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
              title="Gamership Network"
              icon="https://i.imgur.com/DtiViFO.png"
              desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
              id="oEFiPXiavEfQlfHQ0mgC"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};
