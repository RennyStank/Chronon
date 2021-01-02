import * as React from "react";
import * as ReactDOM from "react-dom";

namespace list {
    export interface Props {

    }

    const ListItem = props => (
        <button>
            <span>{props.name}</span>
        </button>
    )

    export class TodoListView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                tasks: []
            }
        }

        render() {
            return (
                <div>
                    {this.state.tasks.map(task => <ListItem task={task} />)}
                </div>
            )
        }
    }
}