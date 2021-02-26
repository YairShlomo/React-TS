import './add-cell.css';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, prevCellId }) => {
  const { insert_cell_after } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insert_cell_after(prevCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          onClick={() => insert_cell_after(prevCellId, 'text')}
          className="button is-rounded is-primary is-small"
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AddCell;
