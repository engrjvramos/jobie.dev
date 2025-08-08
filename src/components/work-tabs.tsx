import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { COMPANY_TABS } from '@/lib/constants';

export default function WorkTabs() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="w-full flex-row">
      <TabsList className="flex-col rounded-none border-l bg-transparent p-0">
        {COMPANY_TABS.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="data-[state=active]:after:bg-primary relative w-full max-w-sm justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <span className="w-full max-w-md text-left text-wrap">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="w-full grow rounded-md border bg-green-100 text-start">
        <TabsContent value="tab-1">
          <p className="text-muted-foreground px-4 py-3 text-xs">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground px-4 py-3 text-xs">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground px-4 py-3 text-xs">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
