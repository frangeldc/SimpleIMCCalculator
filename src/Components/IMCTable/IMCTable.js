import "./IMCTable.css";

const IMCTable = (props) => {
  return (
    <div className="Table">
      <table>
        <tbody>
          <tr>
            <th>IMC</th>
            <th>Class</th>
          </tr>
          <tr>
            <td>Under 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25 - 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30 - 34.9</td>
            <td>Obese I</td>
          </tr>
          <tr>
            <td>35 - 39.9</td>
            <td>Obese II</td>
          </tr>
          <tr>
            <td>Over 40</td>
            <td>Obese III</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IMCTable;
