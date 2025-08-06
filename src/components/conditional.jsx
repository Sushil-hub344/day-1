const name="Lumbini city college"
let address="Rupandehi"
let telephone=56837624;
let age =14;

const english = 50;
const nepali = 60;
const math = 70;
const Conditional = () => {

    if(english < 40 ||nepali <40 || math< 40) return <div>You are fail.</div>;
    //  if(age >= 18)
    //   return <div>You can vote</div>;
    else
  return (
    <div>
      {/* <div>{name}</div>
      <div>{address}</div>
      <div>{telephone}</div> */}

      {/* <div>You cannot vote</div>; */}
      <div>You are pass.</div>
    </div>
  );
}

export default Conditional;