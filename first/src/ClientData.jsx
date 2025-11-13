import Client from "./Client.jsx";
function ClientData () {
    const allClients = [{
        name: 'Anna',
        phone: '0507212180',
        totalPurchases: 15
    }, {
        name: 'Diana',
        phone: '052512180',
        totalPurchases: 8
    }, {
        name: 'Dan',
        phone: '052633646',
        totalPurchases: 11
    }];
    return (
        <>
            {
                allClients.length == 0 ?
                    <div>
                        No Clients Found.
                    </div>
                    :
                    <>
                        {
                            // asking to render all the objects that i have in my array
                            //syntax of array in js is a little different
                            allClients.map(item => (//for every object(item) render it
                                <Client data={item} />//הדאטה שכתבתי פה חייב להיות אותו הדאטה שכתוב לאחר הפרופס בקומפוננטת האב,
                                //if im removing one object, the component will update itself everytime...
                            ))
                        }
                    </>
            }

        </>
    )
}
export default ClientData;