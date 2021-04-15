import Chance from 'chance';

const chance = new Chance();

// import './Simulator.scss';

export const Simulator = () => {

    const diceTest = (n) => {
        let i;
        let test = [0, 0, 0, 0, 0, 0]
        for (i = 0; i < n; i++) {
            let val = chance.d6()
            test[val-1] = test[val-1] + 1
          };
        return test;
    }

return (
    <>
        <div className="simulator">
            {diceTest(100000).map((number) => 
                <li>{number}</li>
            )}
        </div>
    </>
);
};