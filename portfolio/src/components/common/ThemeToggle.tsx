"use client"
import { useTheme } from "@/hooks/useThemes"
import { Switch } from "../ui/switch"
import { useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme: toggleTheme } = useTheme()
  const [theme, setTheme] = useState<boolean>(false);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      if (!prev) {
        toggleTheme('dark')
      } else {
        toggleTheme('light')
      }
      return !prev;
    })
  }

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="flex gap-4 items-center">
    <SunIcon className={!theme?'text-accent':'text-primary'}  />
    <Switch
      checked={theme}
      onCheckedChange={handleToggleTheme}
    />
    <MoonIcon className={theme?'text-accent':'text-primary'} />
    </div>
  )
}