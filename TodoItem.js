import React from 'react';
import Card from "react-bootstrap/Card";

export default function TodoItem({ todo, onDelete }) {
    const images= [
            "https://lh3.googleusercontent.com/proxy/EIIFIA8wYSeTOHwNSayCeTPVCu312lZ-cv-JIKw1YCZzxHbjNd6X0hcR8yMdRdWL0RJvUUmSexSNt9H93aZemCfVgtcy9_AEZE4ES9-js5mHizTf-avr81XNKxBCuE46tOEoalNPX2zAhs-o4qcQRREc3hvWVyUMlg",
            "https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg",
            "https://wallpaperaccess.com/full/139512.jpg",
            "https://cdn.cdnparenting.com/articles/2018/08/602444213-H.jpg",
            "https://thumbs.dreamstime.com/b/football-player-12967704.jpg",
            "https://i.pinimg.com/originals/67/a2/71/67a2716979cdb3e297fe4270636e09bb.jpg",
            "https://www.kolpaper.com/wp-content/uploads/2020/05/Digital-City-Wallpaper.jpg",
            "https://thumbs.dreamstime.com/b/professional-volleyball-players-action-night-court-open-air-78544704.jpg",
            "https://i.insider.com/5a258ab23339b025218b45c0?width=1000&format=jpeg&auto=webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotAd8qPSKJ6izzw4JGpNpOx35iaPfY_WbFaTI15RS7Ohn-ovxPGIY-TOzhDigwba6Ac0&usqp=CAU"
        ];
    const switchImage=()=>{
        let currentImage;
        currentImage=todo.sno%images.length;
        return currentImage;
    }
    return (
        <>
            <div className="TodoItem">
                <Card>
                    <Card.Img variant="top" src={images[switchImage()]} />
                    <Card.Body>
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.desc}</Card.Text>
                        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}