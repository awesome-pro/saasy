export interface NavLink{
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Features",
        href: "#features",
    },
    {
        title: "Pricing",
        href: "#pricing",
    },
    {
        title: "Contact",
        href: "#contact",
    },
]