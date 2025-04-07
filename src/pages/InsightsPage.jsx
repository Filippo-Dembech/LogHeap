import { Typography } from "@mui/material";
import NavbarLink from '../components/NavbarLink';

export default function InsightsPage() {
    return (
        <div>
            <Typography variant="h2" fontWeight={500}>INSIGHTS</Typography>
            <p>Your insights are all the important, useful or just interesting facts about a Computer Science field. An important language specific, Some deep dive into a concept you don't know well, something you have finally understood, and more. To see some examples of insights go <NavbarLink>Here</NavbarLink></p>
        </div>
    )
}