import img1 from '../../images/venueSuv.png'
import img2 from '../../images/i20NlineHatchback.png'
import img3 from '../../images/vernaSedan.png'
import vernaBg from '../../images/vernaBg.jpg'
import venueBg from '../../images/venueBg.jpg'
import i20NlineBg from '../../images/i20NlineBg.jpg'
import img4 from '../../images/benz.png'
import benzbg from '../../images/benzBG.jpg'
import img5 from '../../images/RenaultDuster.png'
import dusterBg from '../../images/renaultBG.jpg'
import toyota from '../../images/toyota.png'
import toyotaBg from '../../images/toyotaBg.jpg'
import img6 from '../../images/virtuspng.png'
import virtusbg from '../../images/virtusBg.jpg'

const Menu = [
    {
        id: 1,
        carname: "Toyota Fortuner",
        category: "MUV",
        image: toyota,
        alt: "Toyota Fortuner",
        description: "The new Fortuner boasts of a power-packed 6-speed Diesel and Petrol AT as well as MT engine capable of turning mountains into molehills. With so much raw, unbridled power at your beck and call, the new Fortuner makes blazing new trails and conquering uncharted territory as easy as a walk in the park.",
        bgImg: toyotaBg,
        altBg: "toyotaBg"
    } ,
    {
        id: 2,
        carname: "Renault Duster",
        category: "MUV",
        alt: "Renault Duster",
        image: img5,
        description: "The Renault Duster comes with a 205 mm minimum ground clearance and measures 4,336 mm in length, 1,822 mm in width as well as 1,695 mm in height. The MUV has a fuel tank capacity of 50 litres on all variants.",
        bgImg: dusterBg,
        altBg: "DusterBg"
    } ,
    {
        id: 3,
        carname: "Mercedes Benz C-Class",
        category: "Sedan",
        image: img4,
        alt: "Mercedes Benz C-Class",
        description: "Progressiveness meets luxury in the all-new Mercedes-Benz C-Class. And the design? An expression of sportiness. With the AVANTGARDE Exterior in the C 200 and C 220d variants, you can further enhance the individuality and sportiness of your vehicle, and show clearly that you attach importance to style and high quality. The expressive body styling of the AMG Line in the C 300d variant lends the exterior of the C-Class a sporty, exclusive touch.",
        bgImg: benzbg,
        altBg: "BenzBg"

    } ,
    {
        id: 4,
        carname: "Volkswagen Virtus",
        category: "SUV",
        image: img6,
        description: "The German- engineered Sedan stands for precision with its striking design and the head-turning big by design look.The Active Cylinder Cut-off Technology adds to its exhilarating performance with the powerful TSI engine and best-in-class German engineering.",
        alt: "Volkswagen Virtus",
        bgImg: virtusbg,
        altBg: "VirtusBg"
    } ,
    {
        id: 5,
        carname: "Hyundai Venue",
        category: "SUV",
        image: img1,
        alt: "Hyundai Venue",
        description: "Its not just about getting from one place to another, its about getting there to style. The new Hyundai VENUE puts the fun into driving. At the heart of the new Hyundai VENUE sits a finely tuned engine that delivers the perfect blend of performance and efficiency for that heart thumping driving experience. To put it simply ,its a lit drive!",
        bgImg: venueBg,
        altBg: "VenueBg"
    } ,
    {
        id: 6,
        carname: "Hyundai i20 N line",
        category: "Hatchback",
        image: img2,
        alt: "Hyundai i20 N line",
        bgImg: i20NlineBg ,
        altBg: "i20 N Line Bg",
        description: "The sporty performance of the Hyundai i20 N Line is powered by a highly responsive engine, paired with a finely tuned suspension. Giving it a distinct exhaust roar that complements its power and great ride and handling capability."

    } ,
    {
        id: 7,
        carname: "Hyundai Verna",
        category: "Sedan",
        image: img3,
        alt: "Hyundai Verna",
        bgImg: vernaBg ,
        altBg: "Verna Bg",
        description: "1.5 l U2 CRDi Diesel Engine The 1.5 l U2 CRDi Diesel Engine is capable of a maximum 84.6 KW (115 PS) at 4,000 rpm and 250 Nm (25.5 kgm) / 1 500 - 2 750 rpm."
    } 
]

export default Menu;