import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){
  const [toggleState, setToggleState] = useState('closed')
  
  const saveExpenseHandler = (enteredExpenseData) =>{
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      }
      props.onAddExpense(expenseData);
  }

  const toggleHandler = () => {
      setToggleState(prevToggleState => {
          const newState = prevToggleState === 'closed'? 'open': 'closed';
          return newState;
      })
  }



    return (
        <div className="new-expense">
            {toggleState === 'closed' ? <button onClick={toggleHandler}>Add New Expense</button> : ''}
            <ExpenseForm onSaveExpense={saveExpenseHandler} toggle = {toggleState} changeToggleState={toggleHandler}/>
        </div>
    )
}

export default NewExpense;