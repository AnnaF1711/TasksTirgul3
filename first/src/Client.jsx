import React from 'react';

function Client(props){
    const client = props.data
    /*נעביר מבחוץ את השמות. כל מה שאני שולח מבחוץ, יהיה בתוך פרופס*/

    return (
        <>
            <div style={{
                border: '1px solid blue'
            }}>
                <div>
                    {/* ארצה לעשות דיב על כל אחד כדי לטפל בהם בנפרד אם צריך, צריך לרוקן מהjsx כל דבר שהוא מבנה, לדוגמה הערכים ובגלל זה העלנו אותם ושמנו בתוך קונסט ופשוט קראנו להם בתוך הjsx*/}
                    Name: {client.name}
                </div>
                <div>
                    Phone: {client.phone}
                </div>
                <div>
                    Total Purchases: {client.totalPurchases}
                </div>
                {
                    client.totalPurchases>10 &&
                    <div>
                        VIP Client
                    </div>
                }
            </div>
        </>//נקרא ריאקט פרגמנט
    )
}

export default Client //הופך את זה להיות פאבליק