import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, product1, product2, product3, product4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: bigShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: bigShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: bigShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Products' },
    { value: '100+', label: 'Shops' },
    { value: '10M+', label: 'Customers' },
];

export const products = [
    {
        imgURL: product1,
        name: "MEN YELLOW PRINTED COTTON PURE COTTON T-SHIRT",
        price: "Rs.314",
    },
    {
        imgURL: product2,
        name: "MIRRORED SPORTS SUNGLASSES WITH UV PROTECTED LENS",
        price: "Rs.2500",
    },
    {
        imgURL: product3,
        name: "NOISE X-FIT 1 ( HRX EDITION)",
        price: "Rs.1999",
    },
    {
        imgURL: product4,
        name: "MEN BLACK URBAN OUTDOOR",
        price: "Rs.1574",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "MEN BLACK URBAN OUTDOOR", link: "/" },
            { name: "NOISE X-FIT 1 ( HRX EDITION)", link: "/" },
            { name: "MIRRORED SPORTS SUNGLASSES WITH UV PROTECTED LENS", link: "/" },
            { name: "MEN YELLOW PRINTED COTTON PURE COTTON T-SHIRT", link: "/" },
            { name: "ROSHAN MEN GREY METAFLASH RUNNING SHOES", link: "/" },
            { name: "MEN BLACK WOVEN DESIGN CHUNKY SNEAKERS", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@hrx.com", link: "mailto:customer@hrx.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];