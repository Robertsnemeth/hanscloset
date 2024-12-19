import { Calendar, Home, Inbox, LogIn, LogOut, Search } from "lucide-react"

import { 
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
    UserButton } from "@clerk/nextjs";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
    // <SignedIn key="signed in"/>,
    // <SignedOut key="signed out"/>,

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Hansys Closet</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SignedOut key="signed out">
                <LogIn />
                <SignInButton />
              </SignedOut>
              <SignedIn key="signed in">
                <div className="flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground">
                    <LogOut/>
                    <SignOutButton />
                </div>
              </SignedIn>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      <UserButton />
      </SidebarContent>
    </Sidebar>
  )
}
