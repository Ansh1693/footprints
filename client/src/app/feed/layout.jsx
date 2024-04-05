import Navbar from '@/components/Navbar'
import Metadata from '../../components/seo/MetaHead'


export const metadata = Metadata({ title: "Feed | Bloks.Social", description: "Organise your bookmarks, favorite tutorials, articles in one place.", image: "/favicon.ico" });


export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar activeTab={'feed'} />
            {children}
        </div>
    )
}
