import React from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';
import newsPic from "../../../images/new 1.jpg"
import newsPic2 from "../../../images/news -2.jpg"
import newsPic3 from "../../../images/new 3.jpg"

const News = () => {
    const newHeadline = [
        {
            headline: "The Preschool Prepartaion",
            time: "Fri Jun 25 2021",
            picture: newsPic

        },
        {
            headline: "Dual Language Learner",
            time: "Sun Apr 14 2021",
            picture: newsPic2
        },
        {
            headline: "The Preschool Prepartaion",
            time: new Date().toDateString(),
            picture: newsPic3
        }
    ]
    return (
        <div className="row text-center mt-5 justify-content-center">
            {
                newHeadline.map(news => <NewsDetails news={news}></NewsDetails>)
            }
        </div>
    );
};

export default News;