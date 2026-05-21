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
          Defaults to <code>[&quot;rbdg-reorder-dragged-row&quot;]</code>.
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
          <code>[&quot;rbdg-reorder-above-drag-target-row&quot;]</code>.
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
          <code>[&quot;rbdg-reorder-below-drag-target-row&quot;]</code>.
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
          Defaults to <code>{'["rbdg-drag-ghost", "border"]'}</code>.
        </p>
      </>
    ),
  },
];
