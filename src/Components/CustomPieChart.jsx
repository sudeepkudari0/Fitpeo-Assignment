// CustomPieChart.js
import React from "react";

function CustomPieChart({
  data,
  centralLabelHeading,
  centralLabelText1,
  centralLabelText2,
  sectorWidths,
  sectorColors, // Pass an array of hex color codes
}) {
  if (!Array.isArray(sectorWidths) || sectorWidths.length !== data.length) {
    console.error("Invalid or missing sectorWidths prop.");
    return null;
  }

  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  let startAngle = 0;

  return (
    <svg width="90%" height="90%" viewBox="0 0 100 100">
      {data.map((entry, index) => {
        const angle = (entry.value / totalValue) * 360;

        const width = sectorWidths[index]; // Get the width of the sector

        const innerRadius = 20 + index * 5; // Vary the inner radius
        const outerRadius = innerRadius + width; // Set the outer radius based on width

        const centerX = 50;
        const centerY = 50;

        const startRad = startAngle * (Math.PI / 180);
        const endRad = (startAngle + angle) * (Math.PI / 180);

        const startX = centerX + Math.cos(startRad) * outerRadius;
        const startY = centerY + Math.sin(startRad) * outerRadius;
        const endX = centerX + Math.cos(endRad) * outerRadius;
        const endY = centerY + Math.sin(endRad) * outerRadius;

        const innerStartX = centerX + Math.cos(startRad) * innerRadius;
        const innerStartY = centerY + Math.sin(startRad) * innerRadius;
        const innerEndX = centerX + Math.cos(endRad) * innerRadius;
        const innerEndY = centerY + Math.sin(endRad) * innerRadius;

        startAngle += angle;

        // Use the provided color directly
        const fill = sectorColors[index];

        return (
          <g key={index}>
            <path
              d={`M ${innerStartX} ${innerStartY} L ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 ${
                angle > 180 ? 1 : 0
              } 1 ${endX} ${endY} L ${innerEndX} ${innerEndY} A ${innerRadius} ${innerRadius} 0 ${
                angle > 180 ? 1 : 0
              } 0 ${innerStartX} ${innerStartY} Z`}
              fill={fill}
            />
          </g>
        );
      })}

      <text
        x="50%"
        y="45%"
        fontWeight="bold"
        fontSize="10"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Central label text color
      >
        {centralLabelHeading}
      </text>
      <text
        x="50%"
        y="55%"
        fontSize="4"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Central label text color
      >
        {centralLabelText1}
      </text>
      <text
        x="50%"
        y="60%"
        fontSize="4"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Central label text color
      >
        {centralLabelText2}
      </text>
    </svg>
  );
}

export default CustomPieChart;
