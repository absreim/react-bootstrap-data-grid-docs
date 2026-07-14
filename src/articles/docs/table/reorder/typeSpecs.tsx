import { SpecTableRow } from "@/shared/TypeSpecTable";

export const reorderStyleModel: SpecTableRow[] = [
  {
    propertyName: "draggedRowClasses",
    isRequired: false,
    typeDefinition: "string[]",
    description: (
      <>
        <p>
          Classes to apply to the <code>tr</code> element being dragged.
        </p>
        <p>
          Defaults to <code>[&quot;rbdg-reorder-dragged-row&quot;]</code>. This
          class causes the top and bottom borders of the row be highlighted with
          the Boostrap <code>success</code> color.
        </p>
      </>
    ),
  },
  {
    propertyName: "draggedRowPredecessorClasses",
    isRequired: false,
    typeDefinition: "string[]",
    description: (
      <>
        <p>
          Classes to apply to the <code>tr</code> element above the one being
          dragged.
        </p>
        <p>
          Defaults to <code>[&quot;rbdg-reorder-dragged-row-pred&quot;]</code>.
          This class causes the bottom border of the row be highlighted with the
          Boostrap <code>success</code> color.
        </p>
      </>
    ),
  },
  {
    propertyName: "topBorderRowClasses",
    isRequired: false,
    typeDefinition: "string[]",
    description: (
      <>
        <p>
          Classes to apply to the <code>tr</code> element above the drop zone.
        </p>
        <p>
          Defaults to{" "}
          <code>[&quot;rbdg-reorder-above-drag-target-row&quot;]</code>. This
          class causes the bottom border of the row be highlighted with the
          Boostrap <code>primary</code> color.
        </p>
      </>
    ),
  },
  {
    propertyName: "bottomBorderRowClasses",
    isRequired: false,
    typeDefinition: "string[]",
    description: (
      <>
        <p>
          Classes to apply to the <code>tr</code> element below the drop zone.
        </p>
        <p>
          Defaults to{" "}
          <code>[&quot;rbdg-reorder-below-drag-target-row&quot;]</code>. This
          class causes the top border of the row be highlighted with the
          Boostrap <code>primary</code> color.
        </p>
      </>
    ),
  },
  {
    propertyName: "ghostDivClasses",
    isRequired: false,
    typeDefinition: "string[]",
    description: (
      <>
        <p>
          Classes to apply to the drag ghost <code>div</code> element.
        </p>
        <p>
          Defaults to <code>{'["rbdg-drag-ghost", "border"]'}</code>. These
          classes together:
        </p>
        <ul>
          <li>
            make the <code>div</code> translucent
          </li>
          <li>
            cause it to float above the grid and toolbar UIs with a{" "}
            <code>z-index</code>{" "}
            of <code>2</code>
          </li>
          <li>
            add a border around the <code>div</code>
          </li>
        </ul>
      </>
    ),
  },
];
