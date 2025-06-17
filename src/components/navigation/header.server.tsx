"use server"

import { Button, Toolbar } from "@mui/material";
import Link from "next/link";

type NavigationProps = {
    routes: Record<string, string>
}

// todo ->  надо сделать клиентскую компоненту для мобильного отображения
export default async function Header({ routes }: NavigationProps) {
    return (
        <Toolbar>
            {Object.entries(routes).map(([key, href]) => (
                <Button
                    key={key}
                    component={Link}
                    href={href}
                    sx={{
                        pl: 1
                    }}>
                    {key}
                </Button>
            ))}

        </Toolbar>
    );
}