import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from './ExpenseList';
import {useState } from 'react';
import ExpenseChart from './ExpenseChart';




function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const [copyExpenses, setCopyExpenses] = useState(props.items);

    const yearHandler= chosenYear => {
        setFilteredYear(chosenYear);
        filterHandler(chosenYear);
    }

    const filterHandler = chosenYear => {
        const filteredExpenses = props.items.filter( expense => (
            expense.date.getFullYear().toString() === chosenYear
        ));
        console.log(filteredExpenses);
        setCopyExpenses(filteredExpenses);
    }
    return(       
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChooseYear={yearHandler}/>
            <ExpenseChart expenses={copyExpenses}/>
            <ExpenseList items={copyExpenses}/>
        </Card>
        </div>

    )
}

export default Expenses;