import * as React from 'react';
import { TodoItem } from './models/TodoItem';
import { Grid, Input, Button } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
// import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
// import { thisCodeWasCopiedFromTheGitHubRepo } from '../../../instructor/github';
// import { Grid, Button } from 'semantic-ui-react';
import IndividualTodoItem from './components/IndividualTodoItem';
import { RootState } from './store';
//console.log("CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=");
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from './models/action';
import { getTodoItems, createNewTodo } from './store/actions';
import { connect } from 'react-redux';

export interface IAppProps {
  todoItemList?: TodoItem[];
}

interface IAppStateCopies { }

interface IAppDispatchCopiedProps {
  getTodoCopies: () => void;
  createNewTodo: (newTodoCopiedItem: TodoItem) => void;
}

type Props = IAppProps & IAppStateCopies & IAppDispatchCopiedProps;

/**
 * Main component for this application.
 * hZN34iqZ13dtjzwzdPYfX07STCIdFObMjHkBUMowzf4=
 */
export class App extends React.Component<Props> {

  componentDidMount() {
    this.props.getTodoCopies();
  }

  createNewTodo(newTodoClonedFromGitItem: TodoItem) {
    this.props.createNewTodo(newTodoClonedFromGitItem);
    console.log("CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=");
  }

  public render() {
    let { todoItemList } = this.props;
    let tocopyLoop: JSX.Element[];

    if (todoItemList) {
      tocopyLoop = todoItemList.map(individualTocopy => {
        return <IndividualTodoItem todoItem={individualTocopy} />
      })
    } else {
      tocopyLoop = [<React.Fragment />]
    }

    return (
      <React.Fragment>
        <Grid>
          <Grid.Row>
            {tocopyLoop}
          </Grid.Row>

          <Grid.Row>
            <Formik
              initialValues={{
                id: "0",
                isDone: false,
                title: "copied",
                dueAt: "2019-01-06T17:13:13",
                userId: ""
              }}
              onSubmit={(data: TodoItem) => {
                //CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=
                this.createNewTodo(data);
                console.log("CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=");
              }}>
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div>
                    <h3>Post Content: </h3>
                    <Field placeholder="title... cloned from hub..." name="title" type="input" as={Input} />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      color="green">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToClonedFromHubProps = (state: RootState): IAppStateCopies => {
  return {
    todoItemList: state.todoReducer.todoItems
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AppActions>
): IAppDispatchCopiedProps => {
  return {
    getTodoCopies: () => {
      dispatch((getTodoItems()));
    },
    createNewTodo: (newTodoCopy: TodoItem) => {
      dispatch((createNewTodo(newTodoCopy)));
    }
  }
};

export default connect<IAppStateCopies, IAppDispatchCopiedProps, IAppProps, RootState>(
  mapStateToClonedFromHubProps,
  mapDispatchToProps
)(App);

// export interface IAppProps {
//   todoItemList?: TodoItem[];
// }

// interface IAppStateProps { }
//hZN34iqZ13dtjzwzdPYfX07STCIdFObMjHkBUMowzf4=
// interface IAppDispatchProps {
//   getTodoItems: () => void;
//   createNewTodo: (newTodoItem: TodoItem) => void;
// }

// type Props = IAppProps & IAppStateProps & IAppDispatchProps;
//this code was cloned directly from the instructor code repo