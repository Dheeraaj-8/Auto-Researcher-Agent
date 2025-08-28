import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { papers, topic } = await request.json()

    if (!papers || !Array.isArray(papers)) {
      return NextResponse.json({ error: "Invalid papers data" }, { status: 400 })
    }

    console.log("Analyzing papers for topic:", topic)

    // Add mock summaries and key points to papers
    const analyzedPapers = papers.map((paper: any, index: number) => ({
      ...paper,
      summary: `This paper presents important findings related to ${topic}, contributing to our understanding of the field through ${index === 0 ? 'comprehensive analysis' : index === 1 ? 'novel methodologies' : 'practical applications'}.`,
      keyPoints: [
        `Key contribution to ${topic} research`,
        `Methodology: ${index === 0 ? 'Systematic review approach' : index === 1 ? 'Experimental validation' : 'Theoretical framework'}`,
        `Impact: ${paper.citationCount} citations demonstrate scholarly influence`
      ]
    }))

    // Generate mock literature review
    const literatureReview = `# Literature Review: ${topic}

## Introduction

This literature review examines ${papers.length} research papers on ${topic}, representing current state-of-the-art approaches and methodologies in the field. The selected papers demonstrate significant scholarly impact with a total of ${papers.reduce((sum: number, p: any) => sum + (p.citationCount || 0), 0)} citations.

## Current State of Research

The research landscape for ${topic} shows active development across multiple dimensions:

### Methodological Approaches
${papers.map((paper: any, index: number) => `
**[${index + 1}] ${paper.title}** (${paper.year})
- Authors: ${paper.authors?.map((a: any) => a.name).join(", ") || "Unknown authors"}
- Citations: ${paper.citationCount || 0}
- Venue: ${paper.venue || "Unknown venue"}
- Key Focus: ${paper.abstract?.substring(0, 200) || "No abstract available"}...
`).join("\n")}

## Key Findings and Trends

Based on the analysis of the selected papers, several important trends emerge:

1. **Methodological Innovation**: The field shows continuous evolution with novel approaches being developed
2. **Performance Improvements**: Recent work demonstrates significant advances in accuracy and efficiency  
3. **Interdisciplinary Applications**: Growing application across diverse domains
4. **Ethical Considerations**: Increasing attention to responsible AI and bias mitigation

## Research Impact and Citations

The papers in this review have received substantial citation counts, indicating strong scholarly engagement:
- Total citations: ${papers.reduce((sum: number, p: any) => sum + (p.citationCount || 0), 0)}
- Average citations per paper: ${Math.round(papers.reduce((sum: number, p: any) => sum + (p.citationCount || 0), 0) / papers.length)}
- Publication years: ${Math.min(...papers.map((p: any) => p.year || 2023))} - ${Math.max(...papers.map((p: any) => p.year || 2023))}

## Future Directions

The literature suggests several promising research directions:
- Integration of multiple methodological approaches
- Enhanced focus on scalability and practical deployment
- Continued development of ethical AI frameworks
- Cross-disciplinary collaboration and applications

## Conclusion

This review provides an overview of current research in ${topic}, highlighting significant contributions and identifying opportunities for future work. The field demonstrates strong momentum with high-impact publications and active scholarly engagement.`

    // Generate key findings
    const keyFindings = [
      `Research in ${topic} spans ${papers.length} significant publications with substantial scholarly impact`,
      `Total citation impact of ${papers.reduce((sum: number, p: any) => sum + (p.citationCount || 0), 0)} citations indicates strong research relevance`,
      "Multiple methodological approaches are being explored across different research groups",
      "Publication venues include top-tier conferences and journals, suggesting high research quality",
      `The field shows active development from ${Math.min(...papers.map((p: any) => p.year || 2023))} to ${Math.max(...papers.map((p: any) => p.year || 2023))}`,
      "Growing emphasis on practical applications and real-world deployment"
    ]

    console.log("Analysis completed successfully")

    return NextResponse.json({
      analyzedPapers,
      literatureReview,
      keyFindings
    })

  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json(
      { 
        error: "Failed to analyze papers",
        analyzedPapers: [],
        literatureReview: "Analysis failed due to server error. Please try again.",
        keyFindings: ["Unable to generate analysis due to server error"]
      }, 
      { status: 500 }
    )
  }
}
