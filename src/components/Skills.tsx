import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const technicalSkills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'PostgreSQL', level: 70 },
];

const softSkills = [
  { name: 'Communication', value: 90 },
  { name: 'Teamwork', value: 85 },
  { name: 'Leadership', value: 80 },
  { name: 'Problem Solving', value: 95 },
  { name: 'Adaptability', value: 85 },
];

const languages = [
  { name: 'Arabe', value: 95 },
  { name: 'French', value: 75 },
  { name: 'Englich', value: 60 },
  { name: 'Japanees', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function Skills() {
  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="technical">Technical Skills</TabsTrigger>
        <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        <TabsTrigger value="languages">Languages</TabsTrigger>
      </TabsList>

      <TabsContent value="technical">
        <Card>
          <CardHeader>
            <CardTitle>Technical Expertise</CardTitle>
            <CardDescription>
              Programming languages and technologies I work with
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={technicalSkills} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar
                    dataKey="level"
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="soft">
        <Card>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
            <CardDescription>
              Professional and interpersonal abilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={softSkills}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="languages">
        <Card>
          <CardHeader>
            <CardTitle>Language Proficiency</CardTitle>
            <CardDescription>Languages I speak and understand</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languages}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} (${value}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {languages.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}