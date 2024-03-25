import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "ETEC Services Support",
  description: "ETEC provides access to our remote help desk software for enhanced customer support.",
};

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav/>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;