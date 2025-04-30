
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">
              <span className="text-[#9b87f5]">Sound</span>Nest
            </span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Плейлисты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/playlists/top" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Популярные</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Самые популярные плейлисты на платформе
                        </div>
                      </Link>
                      <Link to="/playlists/new" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Новинки</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Только что добавленные плейлисты
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/explore">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Обзор
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Войти
          </Button>
          <Button className="bg-[#9b87f5] hover:bg-[#8b5cf6]">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
