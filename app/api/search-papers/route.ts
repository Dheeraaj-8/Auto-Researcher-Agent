import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Missing search query" }, { status: 400 })
    }

    console.log("Searching for papers with query:", query)

    // Mock papers for demo - always return these to ensure the app works
    const mockPapers = [
      {
        paperId: "demo-1",
        title: `Deep Learning Approaches for ${query}: A Systematic Review`,
        abstract: `This comprehensive survey examines the application of deep learning techniques to ${query}. We analyze over 200 recent publications, categorizing approaches into supervised, unsupervised, and reinforcement learning paradigms. Our analysis reveals significant improvements in accuracy and efficiency compared to traditional methods. Key challenges include data quality, model interpretability, and computational requirements. We identify promising research directions including transfer learning, federated learning, and hybrid architectures.`,
        authors: [{ name: "Dr. Sarah Chen" }, { name: "Prof. Michael Rodriguez" }, { name: "Dr. Aisha Patel" }],
        year: 2023,
        citationCount: 127,
        url: "https://arxiv.org/abs/2301.12345",
        venue: "Nature Machine Intelligence",
      },
      {
        paperId: "demo-2",
        title: `Transformer Networks in ${query}: Performance Analysis and Optimization`,
        abstract: `We present a comprehensive analysis of transformer architectures applied to ${query} tasks. Our study evaluates performance across multiple benchmarks, comparing attention mechanisms, positional encodings, and architectural variants. Results demonstrate that specialized transformer designs achieve state-of-the-art performance while reducing computational overhead by 40%. We introduce novel optimization techniques including adaptive attention pruning and dynamic layer scaling.`,
        authors: [{ name: "Dr. James Liu" }, { name: "Prof. Elena Kowalski" }],
        year: 2023,
        citationCount: 89,
        url: "https://proceedings.neurips.cc/paper/2023/hash/abc123def456.html",
        venue: "NeurIPS 2023",
      },
      {
        paperId: "demo-3",
        title: `Ethical Considerations and Bias Mitigation in ${query} Systems`,
        abstract: `As ${query} systems become increasingly prevalent, addressing ethical concerns and algorithmic bias is crucial. This paper examines fairness metrics, bias detection methods, and mitigation strategies across different demographic groups. We propose a comprehensive framework for ethical AI development, including pre-processing, in-processing, and post-processing techniques. Our empirical evaluation demonstrates significant bias reduction while maintaining model performance.`,
        authors: [{ name: "Prof. David Thompson" }, { name: "Dr. Maria Santos" }],
        year: 2022,
        citationCount: 156,
        url: "https://dl.acm.org/doi/10.1145/3531146.3533123",
        venue: "ACM Conference on Fairness, Accountability, and Transparency",
      },
      {
        paperId: "demo-4",
        title: `Federated Learning for ${query}: Privacy-Preserving Distributed Training`,
        abstract: `This paper addresses privacy concerns in ${query} by proposing a federated learning framework that enables collaborative model training without centralizing sensitive data. We develop novel aggregation algorithms that maintain model accuracy while providing differential privacy guarantees. Our approach handles non-IID data distributions and communication constraints common in real-world deployments.`,
        authors: [{ name: "Dr. Alex Kim" }, { name: "Prof. Rachel Green" }, { name: "Dr. Omar Hassan" }],
        year: 2023,
        citationCount: 73,
        url: "https://openreview.net/forum?id=xyz789abc123",
        venue: "ICLR 2023",
      },
      {
        paperId: "demo-5",
        title: `Explainable AI for ${query}: Interpretability Methods and User Studies`,
        abstract: `Understanding AI decision-making processes is essential for building trust in ${query} applications. This work surveys explainability methods including LIME, SHAP, and attention visualization techniques. We conduct extensive user studies with domain experts to evaluate explanation quality and usefulness. Our findings reveal that different stakeholder groups prefer different explanation types, highlighting the need for personalized interpretability approaches.`,
        authors: [{ name: "Dr. Lisa Wang" }, { name: "Prof. Robert Johnson" }],
        year: 2022,
        citationCount: 94,
        url: "https://www.jmlr.org/papers/v23/22-0456.html",
        venue: "Journal of Machine Learning Research",
      },
    ]

    console.log("Returning mock papers:", mockPapers.length)
    return NextResponse.json({ papers: mockPapers })

  } catch (error) {
    console.error("Search papers error:", error)
    return NextResponse.json(
      { error: "Failed to search papers", papers: [] }, 
      { status: 500 }
    )
  }
}
