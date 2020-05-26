import * as React from 'react';
import { TodoItem } from '../models/TodoItem';
import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
import { Grid, Button } from 'semantic-ui-react';
// import { TodoItem } from '../models/TodoItem';
// import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
// import { thisCodeWasCopiedFromTheGitHubRepo } from '../../../instructor/github';
// import { Grid, Button } from 'semantic-ui-react';
import { RootState } from '../store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../models/action';
import { connect } from 'react-redux';

export interface IIndividualTodoItemCloned4RepoProps {
    todoItem: TodoItem;
}

interface IIndividualTodoItemStateCopiedFromRepoProps { }

interface IIndividualTodoItemDispatchProps {
    deleteTodoItems: (copied: string) => void;
    toggleTodoDoneState: (id: string) => void;
    updatingEntireTodo: (todo: TodoItem) => void;
}

type Props = IIndividualTodoItemCloned4RepoProps & IIndividualTodoItemStateCopiedFromRepoProps & IIndividualTodoItemDispatchProps;

export class IndividualTodoItem extends React.Component<Props> {

    private deleteTodoItem(id: string): void {
        let { deleteTodoItems } = this.props;
        deleteTodoItems(id);
    }

    private markTitleAsHello(copiedItem: TodoItem): void {
        let { updatingEntireTodo } = this.props;
        updatingEntireTodo(copiedItem);
    }

    private markAsCompleteOrIncomplete(id: string): void {
        let { toggleTodoDoneState } = this.props;
        toggleTodoDoneState(id);
    }

    public render() {
        let { todoItem } = this.props;
        return (
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={3}>

                    </Grid.Column>
                    <Grid.Column width={7}>
                        <h1>{`Title: ${todoItem.title}`}</h1>
                        <h3>{`Due at: ${todoItem.dueAt}`}</h3>
                        <h3>{`Is ClonedFromGitHub: ${todoItem.isDone}`}</h3>
                        <h3>{`Todo Id: ${todoItem.id}`}</h3>
                        <h3>{`User copiedItem Id: ${todoItem.userId}`}</h3>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Button
                            onClick={() => this.deleteTodoItem(todoItem.id)}
                            color="red">
                            Delete Todo Item
                        </Button>
                        <Button
                            onClick={() => this.markTitleAsHello(todoItem)}
                            color="blue">
                            Modify Todo Item Title to "hello"
                        </Button>
                        <Button
                            onClick={() => this.markAsCompleteOrIncomplete(todoItem.id)}
                            color="green">
                            Mark To do Item as Cloned From Repo!!!! (or incomplete!!!!)
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        //XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=
    }
}

/**
 * 
 * @param dispatch /Qi93eVv7vFHWlkKsO6s3c3L1yAA6W+lSE0787PdcSY=
 */
const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, AppActions>
): IIndividualTodoItemDispatchProps => {
    return {
        //Deletes a todoitem
        //fG8MIlcxkEAGC8/d9haLXXL9m+qDwprLnr0pNz1dT14=
        deleteTodoItems: (id: string) => {
            dispatch(deleteTodo(id));
        },
        toggleTodoDoneState: (id: string) => {
            dispatch(toggleTodoDoneState(id));
        },
        updatingEntireTodo: (copied: TodoItem) => {
            dispatch(updatingEntireTodo(copied));
        }
    };
};

export default connect<IIndividualTodoItemStateCopiedFromRepoProps, IIndividualTodoItemDispatchProps, IIndividualTodoItemCloned4RepoProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(IndividualTodoItem);