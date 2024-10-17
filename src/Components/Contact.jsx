import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Contact = () => {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-4xl font-bold mb-6">Picture Page</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aperiam sint magni consequuntur saepe quam id
                recusandae quidem cumque inventore? Culpa quas deleniti
                molestias amet laboriosam, dolor reprehenderit animi harum earum
                inventore tenetur dignissimos repellat sapiente eum excepturi
                repellendus minus blanditiis assumenda mollitia delectus quam.
            </p>
            <div className="mb-8">
                <LazyLoadImage
                    alt="Random Image 1"
                    src="https://picsum.photos/200/300?random=1"
                    effect="blur"
                    width="400"
                    height="400"
                    className="mx-auto"
                />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                magnam veniam mollitia minima deleniti cum totam vitae
                consectetur dolores dicta distinctio cupiditate pariatur
                molestiae iusto.
            </p>
            <div className="mb-8">
                <LazyLoadImage
                    alt="Random Image 2"
                    src="https://picsum.photos/200/300?random=2"
                    effect="blur"
                    width="400"
                    height="400"
                    className="mx-auto"
                />
            </div>
            <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam consequatur exercitationem repellendus odit sapiente
                fugiat eveniet veniam tempore? Itaque et facilis minima soluta
                repellendus adipisci odit ipsam magnam sint libero, esse
                mollitia quibusdam aliquid iusto nesciunt cum enim nam dolores
                dolor dolorem voluptatem! Animi minus fugit perferendis
                cupiditate, vero atque eos repellendus tenetur suscipit quia
                eligendi. Iure cupiditate expedita architecto, sit doloremque
                veritatis, blanditiis optio deserunt assumenda nesciunt quisquam
                sapiente non ullam temporibus pariatur inventore nemo, dicta
                culpa neque nobis dolorum sequi mollitia dolor! Quod nulla
                consequatur commodi, in hic deserunt dolor eaque temporibus
                minima officia consectetur eius quae! Cum aspernatur magni
                sapiente vero ullam vitae, maxime impedit dignissimos blanditiis
                eligendi saepe laborum aliquid, dolorum, fugiat nam. Magni earum
                fuga libero consequatur, obcaecati provident, sequi doloremque
                blanditiis, aliquam enim a. Illum, autem omnis perferendis
                assumenda sint rerum facere quos numquam totam minima nisi
                possimus cupiditate reprehenderit aliquam odio pariatur
                architecto eveniet ratione, vero placeat delectus. Et, illo
                nemo. Itaque placeat, laudantium voluptatum ducimus atque
                facilis quaerat autem, pariatur odit aspernatur voluptatibus
                maxime exercitationem suscipit officia nesciunt! Fugiat
                exercitationem officiis quos quas consequatur provident veniam
                unde ratione! Eaque dolore itaque nemo possimus. Magni corrupti
                expedita velit a! Corrupti quibusdam recusandae atque eligendi
                sit similique, error dolorum nesciunt officiis cupiditate quo
                harum ipsam perferendis. Odio cum inventore sunt iusto quo
                cumque ducimus officiis, quisquam voluptatibus non deserunt
                debitis quaerat dicta at eos omnis porro doloremque pariatur
                placeat rem ab earum. Ea maiores distinctio tenetur repudiandae,
                perferendis molestiae veritatis, architecto repellat soluta vero
                voluptate voluptatem? Nisi odit deserunt placeat cupiditate qui
                quo neque autem dolores odio voluptatibus quos, corrupti dolore
                dicta, veritatis est accusantium? Explicabo temporibus harum
                nulla expedita! Eius voluptatum blanditiis voluptate, illo error
                modi recusandae perspiciatis dicta reprehenderit? Sequi, dicta?
                Repudiandae natus veritatis in? Repellendus pariatur nobis
                dolorem dolorum ducimus perspiciatis.
            </p>
            <div className="mb-8">
                <LazyLoadImage
                    alt="Random Image 2"
                    src="https://picsum.photos/200/300?random=3"
                    effect="blur"
                    width="400"
                    height="400"
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default Contact;
