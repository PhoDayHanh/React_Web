import React,{ Component } from "react";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {
                    id: 0,
                    author: "John Lemon",
                    date_time: "Oct 17, 2012",
                    content: "Imagine all the establishes, living in Confusion!"
                },
                {
                    id: 1,
                    author: "Paul McVites",
                    date_time: "Sep 06, 2014",
                    content: "Send everyone to heaven, I wish my mother in law could eat it"
                },
                {
                    id: 2,
                    author: " Michael Angelo",
                    date_time: "Feb 14, 2015",
                    content: "Eat it, just eat it"
                },
                {
                    id: 3,
                    author: "Ringo Starry",
                    date_time: "Dec 03, 2013",
                    content: "It's your birthday, we're gonna party!"
                },
                {
                    id: 4,
                    author: "25 Cent",
                    date_time: "Dec 03, 2011",
                    content: "It's emotional damage if you see your friend eating it without ask you"
                }


            ]
        }
    }

    render() {
        const cmt_list = this.state.comments.map((cmt) => {
            return(
                <div key={cmt.id} className="col-12 mt-4">
                        <div className="col-12">{cmt.content}</div>
                        <div className="col-12">
                            <p>-- {cmt.author}, {cmt.date_time}</p>
                        </div>       
                </div>

            );
        });

        return(
            <div className="container">
                <div className="row">
                    <div list>
                        {cmt_list};
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;