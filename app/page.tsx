import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, TrendingUp, Users, Zap, Clock } from "lucide-react"

export default function WebsiteRevampProposal() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Transforming Your Website into a Global Sales Engine
            </h1>
            <p className="text-xl text-gray-600 mb-4">A Strategic Website Revamp Proposal for Cups & Moulds</p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Prepared by</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Mode AI
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Global Reach</h3>
              <p className="text-sm text-gray-600">Position for international markets</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Conversion Focus</h3>
              <p className="text-sm text-gray-600">Turn visitors into buyers</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">24/7 Sales Engine</h3>
              <p className="text-sm text-gray-600">Work across all time zones</p>
            </div>
          </div>
        </div>

        {/* Business Challenge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-red-600" />
              The Business Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              You've built a solid manufacturing business. Your product quality is high, and your packaging and moulding
              capabilities are trusted by local clients.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              But when it comes to international clients, your website isn't telling that story.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h4 className="font-semibold text-red-800 mb-2">Right now:</h4>
              <ul className="space-y-2 text-red-700">
                <li>• International buyers don't understand your scale or reliability</li>
                <li>• They can't find you on Google when searching from abroad</li>
                <li>• Even when they do land on your site — they don't convert</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800 font-medium">
                This isn't a product issue. It's a positioning and presentation issue.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What's Holding You Back */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Holding You Back</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Your current website is functional but lacks the infrastructure, language, and experience that
              international clients expect when evaluating a manufacturing partner.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">1. Your Brand Story Isn't Global Yet</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• No highlight of export capabilities or international clients</li>
                  <li>• No content tailored to foreign visitors</li>
                  <li>• Business appears strictly local</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">2. Trust Elements Are Missing</h4>
                <p className="text-gray-700 text-sm mb-2">
                  International buyers ask: "Can I trust this company to deliver on time, at volume, across borders?"
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• No client logos or testimonials</li>
                  <li>• No export certifications or global case studies</li>
                  <li>• No visuals suggesting scale or logistics readiness</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">3. Limited SEO & Discovery</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Not ranking for international buyer keywords</li>
                  <li>• No region-specific landing pages</li>
                  <li>• Missing product category breakdowns for search engines</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">4. User Experience That Doesn't Convert</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Too much reading required, not enough scanning</li>
                  <li>• No direct CTAs (downloadable specs, RFQ buttons)</li>
                  <li>• Flat navigation without conversion guidance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Solution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              What We Will Do to Help You Attract Global Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6 font-medium">
              We're not just redesigning a website. We're repositioning your digital identity to turn browsers into
              buyers from around the world.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">
                  1. Transform Your Homepage into a Global Conversion Tool
                </h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Clear, bold export-focused messaging ("Trusted by Clients Across 10+ Countries")</li>
                  <li>• Certifications, export capabilities, and process timelines displayed upfront</li>
                  <li>• Visual storytelling with professional media and scalable UI</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">
                  2. Revamp Site Architecture — Designed for International Buyers
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Core Pages:</h5>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Homepage (Global positioning)</li>
                      <li>• About Us (Export readiness, scale)</li>
                      <li>• Products Page (Modular categories)</li>
                      <li>• Product Category Pages</li>
                      <li>• Industries We Serve</li>
                      <li>• Global Clients/Partners</li>
                      <li>• Contact Page (Multi-option)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Optional Additions:</h5>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Sustainability Page</li>
                      <li>• Blog/Insights for SEO</li>
                      <li>• Downloadable catalogs</li>
                      <li>• Process documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">3. Add Global Buyer Trust Signals</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Export certifications and factory images</li>
                  <li>• Client testimonials (local and international)</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Fast load times globally</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">4. SEO & Performance Optimization</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• International keyword targeting</li>
                  <li>• Metadata and schema optimization</li>
                  <li>• Global sitemap with proper crawlability</li>
                  <li>• Analytics and heatmap setup</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Snapshot */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Technical Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Component</th>
                    <th className="text-left py-3 px-4 font-semibold text-red-600">Current Website</th>
                    <th className="text-left py-3 px-4 font-semibold text-green-600">After Revamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium">Total Pages</td>
                    <td className="py-3 px-4 text-red-600">~3 static pages</td>
                    <td className="py-3 px-4 text-green-600">~8 optimized core pages</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Contact Options</td>
                    <td className="py-3 px-4 text-red-600">Basic form</td>
                    <td className="py-3 px-4 text-green-600">Multi-channel: Form, WhatsApp, Call, Email</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Catalogs</td>
                    <td className="py-3 px-4 text-red-600">Not available</td>
                    <td className="py-3 px-4 text-green-600">Downloadable product spec PDFs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">SEO Readiness</td>
                    <td className="py-3 px-4 text-red-600">Very low</td>
                    <td className="py-3 px-4 text-green-600">Full keyword optimization + speed tuning</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Mobile Performance</td>
                    <td className="py-3 px-4 text-red-600">Basic responsive</td>
                    <td className="py-3 px-4 text-green-600">Fully optimized + fast across regions</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">CMS/Backend</td>
                    <td className="py-3 px-4 text-red-600">Hardcoded/static</td>
                    <td className="py-3 px-4 text-green-600">Easy-to-update CMS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Language Support</td>
                    <td className="py-3 px-4 text-red-600">English only</td>
                    <td className="py-3 px-4 text-green-600">English + future-ready for multilingual</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* End Result */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-green-700">End Result: A Website That Sells Without a Salesperson</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">After the revamp, your website will:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Position Cups & Moulds as a global packaging partner, not just a local supplier
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Turn international visitors into leads with proper messaging and CTAs
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Earn trust in seconds with a clean, premium interface</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Improve international rankings for US, Europe, Southeast Asia, and Middle East buyers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
              <p className="text-green-800 font-medium">
                This is how you scale beyond borders — with a digital presence that reflects the real quality of your
                work.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Timeline & Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discovery & Research</h4>
                    <p className="text-sm text-gray-600">2 Days</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">First Design Mockups</h4>
                    <p className="text-sm text-gray-600">5–7 Days</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Website Build & SEO</h4>
                    <p className="text-sm text-gray-600">10–12 Days</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Final Review & Launch</h4>
                    <p className="text-sm text-gray-600">3 Days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 text-center">
              <p className="text-blue-800 font-semibold text-lg">Total Timeline: 3 Weeks</p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Make Your Website Work 24/7 Across Time Zones</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We are ready to help you evolve your website from a static page into a global lead generation machine.
            </p>
            <p className="text-lg font-semibold mb-4">
              Let's schedule a quick strategy call and show you the full roadmap.
            </p>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-100 mb-2">Prepared by:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold">Mode AI</span>
                <span className="text-blue-200">•</span>
                <a href="https://www.mode-ai.co/" className="text-blue-200 hover:text-white underline">
                  www.mode-ai.co
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
